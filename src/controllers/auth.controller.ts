import { ResExpress, ReqExpress } from 'express'

export const registration = (req: ReqExpress, res: ResExpress) => {
  console.log('registration')
  res.json('registration')
}

export const login = (req: ReqExpress, res: ResExpress) => {
  console.log('login')
  res.json('login')
}
