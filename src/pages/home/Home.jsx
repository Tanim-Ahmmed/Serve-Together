import { Link, useLoaderData } from "react-router-dom";
import PostCard from "../shared/PostCard";
import { useEffect, useState } from "react";
import Slider from "./Slider";
import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";
import { FaPeopleLine } from "react-icons/fa6";
import Feedback from "./Feedback";
const Home = () => {
  const [postCount, setPostCount] = useState(0);
  const { theme } = useAuth();
  const posts = useLoaderData();

  useEffect(() => {
    fetch(`https://assignment-server-ochre-eight.vercel.app/posts`)
      .then((res) => res.json())
      .then((data) => {
        setPostCount(data.length);
      });
  }, []);
  return (
    <div >
      <Slider></Slider>
      <div className=" pt-10 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent ${
                theme === "dark"
                  ? "from-white to-white/60"
                  : "from-black to-black/60"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Best for You
            </motion.h2>
            <motion.p
              className={`max-w-2xl mx-auto ${
                theme === "dark" ? " text-white/60" : "text-black/60"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Discover posts highlighting urgent needs, ongoing projects, and
              impactful initiatives, all designed to help you make a difference
              where it matters most.
            </motion.p>
          </div>
        </div>
    

      <div className="max-w-7xl mx-auto grid grid-cols-1  m-6 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post._id} post={post}></PostCard>
        ))}
      </div>
      <div className="w-full mx-auto py-6 flex justify-center">
        <Link to="/allPosts"  className="bg-orange-500 text-white px-10 border border-orange-700 py-2  rounded-3xl hover:bg-orange-600 transition">
          See All
        </Link>
      </div>
      </div>
      <div className="bg-base-200 text-center py-16 px-6">
      <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent ${
                theme === "dark"
                  ? "from-white to-white/60"
                  : "from-black to-black/60"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
             The Numbers
            </motion.h2>
            <motion.p
              className={`max-w-2xl mx-auto ${
                theme === "dark" ? " text-white/60" : "text-black/60"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
             See the impact we’re making together! These numbers represent the passion, dedication, and teamwork of our amazing volunteers and the communities we serve.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-3 md:gap-4 max-w-7xl mx-auto">
              <motion.div 
                className={`group relative bg-gradient-to-br  rounded-2xl p-4 md:p-6  transition-all duration-300 ${
                  theme === "dark" ? "from-orange-500/20 to-blue-500/10 hover:from-orange-500/20 hover:to-blue-500/20" : "from-orange-900/60 to-black/50 hover:from-orange-500/70 hover:to-blue-500/10 " }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0.5 rounded-[14px] bg-black/50 -z-10 backdrop-blur-sm"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                    <FaPeopleLine className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-white font-medium text-lg mb-2">{postCount}</h3>
                  <p className="text-white/60 text-sm">Volunteer Opportunities</p>
                </div>
              </motion.div>

            
              <motion.div 
                className={`group relative bg-gradient-to-br  rounded-2xl p-4 md:p-6  transition-all duration-300 ${
                  theme === "dark" ? "from-orange-500/10 to-blue-500/10 hover:from-orange-500/20 hover:to-blue-500/20" : "from-orange-900/60 to-black/50 hover:from-orange-500/70 hover:to-blue-500/10 " }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0.5 rounded-[14px] bg-black/50 -z-10 backdrop-blur-sm"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                    <FaPeopleLine className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-white font-medium text-lg mb-2">500+</h3>
                  <p className="text-white/60 text-sm">Volunteers</p>
                </div>
              </motion.div>
              <motion.div 
                className={`group relative bg-gradient-to-br  rounded-2xl p-4 md:p-6  transition-all duration-300 ${
                  theme === "dark" ? "from-orange-500/10 to-blue-500/10 hover:from-orange-500/20 hover:to-blue-500/20" : "from-orange-900/60 to-black/50 hover:from-orange-500/70 hover:to-blue-500/10 " }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0.5 rounded-[14px] bg-black/50 -z-10 backdrop-blur-sm"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                    <FaPeopleLine className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-white font-medium text-lg mb-2">200+</h3>
                  <p className="text-white/60 text-sm">Successful Projects</p>
                </div>
              </motion.div>
              <motion.div 
                className={`group relative bg-gradient-to-br  rounded-2xl p-4 md:p-6  transition-all duration-300 ${
                  theme === "dark" ? "from-orange-500/10 to-blue-500/10 hover:from-orange-500/20 hover:to-blue-500/20" : "from-orange-900/60 to-black/50 hover:from-orange-500/70 hover:to-blue-500/10 " }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0.5 rounded-[14px] bg-black/50 -z-10 backdrop-blur-sm"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20"></div>
                <div className="flex flex-col items-center text-center">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                    <FaPeopleLine className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-white font-medium text-lg mb-2">10,000+</h3>
                  <p className="text-white/60 text-sm"> Lives Impacted</p>
                </div>
              </motion.div>
            </div>
          <div>
          <Feedback></Feedback>
          </div>
      </div>
    </div>
  );
};

export default Home;
