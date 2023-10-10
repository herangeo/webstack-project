import React, { useEffect, useState } from 'react';
import './videocard.css';

const API = "AIzaSyBrTo2t9kb7cH9w_SdesmszWb7Dqrm1hEQ"; // Replace with your YouTube API key
const channelId = "UCQ8DHpYx3A54TLMQzmgW1xA";
const baseFetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet,id&channelId=${channelId}&order=date&maxResults=10`;

export const YTvideos = () => {
    const [allvideos, setAllvideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchVideos = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((resJson) => {
                const result = resJson.items.map((doc) => ({
                    ...doc,
                    VideoLink: "https://www.youtube.com/embed/" + doc.id.videoId
                }));
                setAllvideos(result);
            });
    }

    useEffect(() => {
        fetchVideos(baseFetchUrl);
    }, []);

    const handleSearch = () => {
        const searchUrl = `${baseFetchUrl}&q=${encodeURIComponent(searchTerm)}`;
        fetchVideos(searchUrl);
        console.log("hemme");
    }

    return (
        <div>
            <div className="search-container">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search videos..."
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="video-container">
                {allvideos.map((item) => (
                    <div key={item.id.videoId} className="video-card">
                        <iframe
                            width="500"
                            height="300"
                            src={item.VideoLink}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <p>{item.snippet.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default YTvideos;
