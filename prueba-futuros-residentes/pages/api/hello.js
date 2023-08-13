import questions from "@/Databases/questions"

export default function handler(req, res) {
  res.status(200).json(questions)
}
