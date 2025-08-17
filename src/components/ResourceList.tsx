import { Link, useSearchParams } from 'react-router-dom';
import { useFetchResourceListQuery } from '../features/swapi/swapiApi';
import type { ResourceKind, ResourceMap } from '../features/swapi/types';
import Pagination from './Pagination';
import { Loading, ErrorBox } from './LoadingError';
import { extractId, getPageFromUrl } from '../features/swapi/utils';



type Props<K extends ResourceKind> = {
  kind: K;
  displayFields?: (keyof ResourceMap[K])[];
};

export default function ResourceList<K extends ResourceKind>({ kind }: Props<K>) {
  const [params, setParams] = useSearchParams();
  const page = Number(params.get('page') || 1);

  const { data, isLoading, isError, error } = useFetchResourceListQuery({ kind, page });

  if (isLoading) return <Loading />;
  if (isError) return <ErrorBox message={String((error as any)?.error || 'Failed to load.')} />;

  const items = data?.results ?? [];
  const hasNext = Boolean(data?.next);
  const hasPrevious = Boolean(data?.previous);

  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <div style={{ display: 'grid', gap: '0.75rem' }}>
        {items.map((item: any) => {
          const id = extractId(item.url);
          return (
            <Link
              key={id}
              to={`/${kind}/${id}`}
              style={{
                padding: '0.75rem',
                border: '1px solid #e5e7eb',
                borderRadius: 10,
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: 4 }}>{item.name}</div>
              <div style={{ fontSize: 14, opacity: 0.85 }}>
                {kind === 'people' && <>Gender: {item.gender} Birth year: {item.birth_year}</>}
                {kind === 'planets' && <>Climate: {item.climate} Terrain: {item.terrain}</>}
                {kind === 'species' && <>Class: {item.classification} Language: {item.language}</>}
                {kind === 'starships' && <>Model: {item.model} Class: {item.starship_class}</>}
                {kind === 'vehicles' && <>Model: {item.model} Class: {item.vehicle_class}</>}
              </div>
            </Link>
          );
        })}
      </div>

      <Pagination
        page={page}
        totalCount={data?.count ?? 0}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
        onPageChange={(p) => {
          const next = Math.max(1, p);
          setParams({ page: String(next) });
        }}
      />
    </div>
  );
}
