import type { NextApiRequest, NextApiResponse } from 'next'

import { listVideos, retrieveSessionId } from '../../utils/fooni_video'

type Data = {
  latestVideo: {
    title: string
    downloadUrl: string
    posterUrl: string
    date: string
  } | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const sessionId = await retrieveSessionId()
  const videos = await listVideos(sessionId)

  const latestVideo = videos.length > 0 ? videos.reverse()[0] : null

  res.status(200).json({ latestVideo })
}
