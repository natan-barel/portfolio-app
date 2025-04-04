import React, { useEffect, useState } from 'react';
import './Certifications.css';

const Certifications = () => {
    const [badges, setBadges] = useState([]);

    useEffect(() => {
        fetch('https://www.credly.com/users/natan-barel/badges.json')
            .then((res) => res.json())
            .then((data) => setBadges(data.data))
            .catch((err) => console.error('Failed to fetch certifications:', err));
    }, []);

    return (
        <section id="certifications">
            <h1>Certifications</h1>
            <div className="certifications-list">
                {badges.map((badge) => (
                    <div key={badge.id} className="certification-item">
                        <img
                            src={badge.badge_template.image_url}
                            alt={badge.badge_template.name}
                            style={{ width: '100px' }}
                        />
                        <h3>{badge.badge_template.name}</h3>
                        <p>{badge.issued_to}</p>
                        <p>{new Date(badge.issued_at).toLocaleDateString()}</p>
                        <a href={badge.badge_template.url} target="_blank" rel="noopener noreferrer">
                            View on Credly
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
