import { NextApiRequest } from "next"
import nodemailer from 'nodemailer'


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "joel.vappiani@gmail.com",
    pass: "lgbtntfwpvdntgmt"
  }
});

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    const mailData = {
      from: `${email}`,
      to: 'joel.vappiani@gmail.com',
      subject: `New message from djovap.com`,
      html: `
      <h2>${name}</h2>
      <p>${message}</p>`
    }

    await transporter.sendMail(mailData)
    return Response.json({ message: 'Message sent' })
  } catch (error) {
    return Response.json({ result: false, message: 'Something went wrong' })
  }

}