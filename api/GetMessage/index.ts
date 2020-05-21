import { AzureFunction, Context, HttpRequest } from '@azure/functions'

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const date = new Date().toUTCString()
  context.res = {
    body: {
      text: `${date}`
    }
  }
}

export default httpTrigger
