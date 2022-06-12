import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization:
            "Bearer yVXiPiVEc2XgqBD9JehqDpsGIy7oOANQuveDYXEJZAcmhl_JHn6eOySWjQVp16KcMnaZN-1XrjlfuDEhCjdtTH1qA3fKLrfTepnYD7x3iF8ZNTKGqc5p93SIhp2qYXYx",
    },
});
