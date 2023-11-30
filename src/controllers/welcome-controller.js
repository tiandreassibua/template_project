import welcomeService from "../service/welcome-service.js";

const index = async (req, res, next) => {
    try {
        const result = welcomeService.index();
        res.status(200).json(result);
    } catch (e) {
        console.log(e);
    }
};

export default { index };
