import { User } from '../../../models/User'
import bcrypt from 'bcrypt'

export const login = async (_parent, args, _context, _info) => {
  const user = await User.findOne({ email: args.email })
  if (!user) {
    throw new Error('No such user found')
  }

  const isPasswordValid = await bcrypt.compare(args.password, user.password)
  if (!isPasswordValid) {
    throw new Error('Invalid password')
  }

  return user
}
