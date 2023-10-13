import React, { useEffect, useState } from 'react';
import './videocard.css';

const API = "AIzaSyDnfK7A5FGa50mXVjtwEF_9yOgfdryWdl8"; 
const channelId = "UCQ8DHpYx3A54TLMQzmgW1xA";
const baseFetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet,id&channelId=${channelId}&order=date&maxResults=9`;
const baseFetchUrl1 = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet,id&channelId=${channelId}&order=date&maxResults=100`;

export const YTvideos = () => {
    const [allvideos, setAllvideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchVideos = (baseFetchUrl) => {
        fetch(baseFetchUrl)
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

    useEffect(() => {
        if (searchTerm === '') {
            fetchVideos(baseFetchUrl);
        }
    }, [searchTerm]);

    const handleSearch = () => {
        const searchUrl = `${baseFetchUrl1}&q=${encodeURIComponent(searchTerm)}&channelId=${channelId}`;
        fetchVideos(searchUrl);
    }

    return (
        <div>
            <div className="search-container">
                <input
                    id="search"
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
                            width="445"
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
            <hr/>
        </div>
    );
}

export default YTvideos;
