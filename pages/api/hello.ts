import { NextApiRequest, NextApiResponse } from 'next'
import FetchSomeThingBeautiful from '../../facades/SomeHttpsFacades/FetchSomeThingBeautiful'

export default async (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: await FetchSomeThingBeautiful() })
}
