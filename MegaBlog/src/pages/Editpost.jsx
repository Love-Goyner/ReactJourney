import React, { useEffect, useState } from "react";
import { PostForm, Container } from '../componet/index'
import { useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";

function Editpost() {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) {
          setPost(psot);
        }
      });
    }else{
        navigate('/');
    }
  }, [slug, navigate]);

  return  post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default Editpost;
