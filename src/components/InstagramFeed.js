import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function InstagramFeed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchInstagramFeed = async () => {
          try {
            const response = await axios.get(
              `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=IGQVJYUkF3aXlfV3VUTlZA5U055VXdsNWNWaDZARRDBXWVNXanFIdjVMVThYOHVSdmRfN0hpRjlGeHRvR2t0NExsS3NtdzFqazlNMUpwMHNxWHVDWVlKZAE5OdkhXRkZA4aFA1WVFsekJrU0RmbkxGSlFkawZDZD`
            );
            setPosts(response.data.data);
          } catch (error) {
            console.error(error);
          }
        };

        fetchInstagramFeed();
    }, []);

    return (
        <div className="instagram-feed">
          {posts.map((post) => (
            <div className="ig-post" key={post.id}>
              <img src={post.media_url} alt={post.caption} />
            </div>
          ))}
        </div>
      );
}