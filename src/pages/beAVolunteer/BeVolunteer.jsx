import { useLoaderData } from "react-router-dom";


const BeVolunteer = () => {
    const post = useLoaderData();
    console.table(post);
    return (
        <div>
            be a volunteer
        </div>
    );
};

export default BeVolunteer;