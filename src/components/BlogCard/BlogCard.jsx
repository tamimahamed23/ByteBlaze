import { Link } from "react-router-dom";
import placeholderimg from "../../assets/404.jpg"

const BlogCard = ({blog}) => {

   const {cover_image,title,description,published_at,id}=blog;
    return (
        <div className="shadow-md p-5 border border-secondary">
             <Link to={`/blog/${id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
                    <img role="presentation" className="object-cover w-full rounded h-44 bg-g" src={cover_image || placeholderimg}/>
                    <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-primary">{title}</h3>
                        <span className="text-xs text-gray-400">{new Date(published_at).toDateString()}</span>
                        <p className="text-secondary">{description}</p>
                    </div>
                </Link>
                
        </div>
    );
};

export default BlogCard;