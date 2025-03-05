// Externals
import { NextRequest, NextResponse } from 'next/server'
// Locals
import { getConsoleMetadata } from '@/app/utils/debug'


let secretCode: string | null = null


const LOG_TYPE = `API_CALL`
const FILE_PATH = `src/app/api/webhook/route.ts`


const consoleMetadata = (
  isLog: boolean,
  functionName: string,
): string => getConsoleMetadata(LOG_TYPE, isLog, FILE_PATH, functionName)




export async function POST(req: NextRequest) {
  const FUNCTION_NAME = `POST()`

  if (req.method === 'POST') {
    try {
      // Use `any` type since the type definition of the payload is unknown.
      const payload: any = await req.json()

      const message = `Received payload successfully`

      console.log(
        `${ 
          consoleMetadata(true, FUNCTION_NAME) 
        } ${ message }: `,
        payload
      )

      return NextResponse.json(
        { 
          message,
          payload
        },
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
    } catch (error: any) {
      const errorMessage = `Error processing payload`

      console.error(
        `${ consoleMetadata(false, FUNCTION_NAME) } ${ errorMessage }: `, 
        error
      )

      return NextResponse.json(
        { error: error.message },
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
    }
  } else {
    return NextResponse.json(
      { error: 'Method Not Allowed' },
      {
        status: 405,
        headers: {
          'Content-Type': 'application/json'
        }
      },
    )
  }
}