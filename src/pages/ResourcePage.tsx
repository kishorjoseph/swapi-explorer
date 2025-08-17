import ResourceList from '../components/ResourceList';
import type { ResourceKind } from '../features/swapi/types';

export default function ResourcePage({ kind }: { kind: ResourceKind }) {
  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <h1 style={{ textTransform: 'capitalize' }}>{kind}</h1>
      <ResourceList kind={kind} />
    </div>
  );
}
