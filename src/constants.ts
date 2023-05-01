import Express from 'express'

export type TypedRequestBody<T> = Express.Request & T
