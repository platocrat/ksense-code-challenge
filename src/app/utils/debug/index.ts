import { rng } from '../math'


const LOG_INDEX_RANGE = 10_000


/**
 * @dev Function to get the current UTC timestamp in nanoseconds
 * @returns
 */
export function nowInNs(): bigint {
  const timeOrigin = BigInt(Math.round(performance.timeOrigin * 1_000_000))
  const now = BigInt(Math.round(performance.now() * 1_000_000))
  return timeOrigin + now
}



export function getConsoleMetadata(
  logType: 'CLIENT' | 'SERVER' | 'API_CALL',
  isLog: boolean,
  filePath: string,
  functionName: string,
): string {
  const rn = rng(LOG_INDEX_RANGE)
  const currentTime = nowInNs()

  return `[${
    logType
    } ${ isLog ? 'LOG' : 'ERROR' }: ${
      rn
    } --logTimestamp='${
      currentTime
    }' --file-path='${
      filePath
    } --function-name='${
      functionName
    }']: `
}