/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import authorImage from "../assets/Image.png";
import authorImage1 from "../assets/Image1.png";
import authorImage2 from "../assets/Image2.png";
import authorImage3 from "../assets/Image3.png";
import authorImage4 from "../assets/Image5.png";
import { Link } from "react-router";
export function Card(props) {
  const { image, publishedAt, description, author, query, url } = props;
  const authorImages = [
    authorImage,
    authorImage1,
    authorImage2,
    authorImage3,
    authorImage4,
  ];
  const [authorImg, setAuthorImg] = useState("");
  useEffect(() => {
    // Randomly select an author image when the component mounts
    const randomIndex = Math.floor(Math.random() * authorImages.length);
    setAuthorImg(authorImages[randomIndex]);
  }, []);
  return (
    <Link to={url} target="_blank" rel="noopener noreferrer">
      <div className="h-[488px] w-[392px] p-4 border border-[#E8E8EA] rounded-[12px] border-solid">
        <img
          src={image}
          className="mb-4 h-[240px] w-[360px] rounded-md"
          loading="lazy"
          alt="Image"
        />
        <h5 className="mb-6 text-sm font-medium text-[#4B6BFB]">{query}</h5>
        <h3 className="my-3 text-2xl font-semibold">{description}</h3>
        <div className="flex justify-between items-center mt-6">
          <div className="flex gap-6 items-center ">
            <img
              src={authorImg}
              className="h-[36px] w-[36px] rounded-[28px]"
              loading="lazy"
              alt="Image"
            />
            <h6 className="text-base font-medium text-[#97989f]">{author}</h6>
          </div>

          <p className="text-base font-medium text-[#97989f]">
            {new Date(publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
}
