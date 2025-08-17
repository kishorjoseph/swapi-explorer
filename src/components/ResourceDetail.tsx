import { useParams, Link } from 'react-router-dom';
import { useFetchResourceDetailQuery } from '../features/swapi/swapiApi';
import type { ResourceKind } from '../features/swapi/types';
import { Loading, ErrorBox } from './LoadingError';

const pretty = (obj: Record<string, any>) =>
  Object.entries(obj)
    .filter(([k, v]) => typeof v === 'string' && !['url', 'created', 'edited', 'films', 'people', 'residents', 'pilots'].includes(k))
    .map(([k, v]) => (
      <div key={k}><strong style={{ textTransform: 'capitalize' }}>{k.replace(/_/g, ' ')}:</strong> {v}</div>
    ));

export default function ResourceDetail() {
  const { kind, id } = useParams<{ kind: ResourceKind; id: string }>();
  const { data, isLoading, isError, error } = useFetchResourceDetailQuery({ kind: kind!, id: id! });

  if (isLoading) return <Loading />;
  if (isError) return <ErrorBox message={String((error as any)?.error || 'Failed to load.')} />;

  return (
    <div style={{ display: 'grid', gap: '0.75rem' }}>
      <Link to={`/${kind}`}>&larr; Back to {kind}</Link>
      <h2 style={{ margin: 0 }}>{(data as any).name}</h2>
      <div style={{ border: '1px solid #e5e7eb', borderRadius: 10, padding: '1rem' }}>
        {pretty((data as any))}
      </div>
    </div>
  );
}
