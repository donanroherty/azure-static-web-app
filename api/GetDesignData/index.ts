import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { MongoClient } from 'mongodb'
import { auth } from '../shared'

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    const id = req.query.id

    const client = await MongoClient.connect(process.env.CosmosDBURL, {
      auth: auth
    })
    const designs = client.db(process.env.COSMOSDB).collection('designs')
    const item = id ? designs.find({ id: id }) : designs.find()
    const arr = await item.toArray()

    context.res = {
      status: 200,
      body: arr
    }
  } catch (error) {
    context.log(error)
    context.res = {
      status: 400,
      body: error
    }
  }
}

export default httpTrigger
