import { isAddress } from '../utils'
import useENSAddress from './useENSAddress'
import useENSName from './useENSName'

/**
 * We don't support ENS behaviour.
 * @param nameOrAddress ENS name or address
 */
export default function useENS(
  nameOrAddress?: string | null
): { loading: boolean; address: string | null; name: string | null } {
  return null;
}
