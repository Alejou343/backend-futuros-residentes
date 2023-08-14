import questionsGeneralCulture from "@/Databases/questionsGeneralCulture"
import cors from 'cors';

const corsOptions = {
    origin: 'https://alejou343.github.io', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

export default function handler(req, res) {
    cors(corsOptions)(req, res, () => {
        res.status(200).json(questionsGeneralCulture);
    });
}
