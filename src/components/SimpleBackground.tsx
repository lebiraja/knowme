import React from 'react';
import '../styles/SimpleBackground.css';

const SimpleBackground: React.FC = () => {
    // Expanded tech logos collection - 40+ logos
    const techLogos = [
        // Development Tools
        { name: 'Git', url: 'https://cdn.simpleicons.org/git/F05032', size: 'large' },
        { name: 'GitHub', url: 'https://cdn.simpleicons.org/github/FFFFFF', size: 'medium' },
        { name: 'VS Code', url: 'https://cdn.simpleicons.org/visualstudiocode/007ACC', size: 'large' },
        { name: 'Android', url: 'https://cdn.simpleicons.org/android/3DDC84', size: 'medium' },
        { name: 'IntelliJ', url: 'https://cdn.simpleicons.org/intellijidea/000000', size: 'small' },

        // Frameworks & Libraries
        { name: 'React', url: 'https://cdn.simpleicons.org/react/61DAFB', size: 'large' },
        { name: 'TypeScript', url: 'https://cdn.simpleicons.org/typescript/3178C6', size: 'medium' },
        { name: 'JavaScript', url: 'https://cdn.simpleicons.org/javascript/F7DF1E', size: 'small' },
        { name: 'Python', url: 'https://cdn.simpleicons.org/python/3776AB', size: 'medium' },
        { name: 'Flutter', url: 'https://cdn.simpleicons.org/flutter/02569B', size: 'medium' },
        { name: 'Vue', url: 'https://cdn.simpleicons.org/vuedotjs/4FC08D', size: 'small' },
        { name: 'Angular', url: 'https://cdn.simpleicons.org/angular/DD0031', size: 'small' },
        { name: 'Next.js', url: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF', size: 'medium' },
        { name: 'Tailwind', url: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', size: 'medium' },

        // DevOps & Cloud
        { name: 'Docker', url: 'https://cdn.simpleicons.org/docker/2496ED', size: 'large' },
        { name: 'Kubernetes', url: 'https://cdn.simpleicons.org/kubernetes/326CE5', size: 'medium' },
        { name: 'Node.js', url: 'https://cdn.simpleicons.org/nodedotjs/339933', size: 'medium' },
        { name: 'Firebase', url: 'https://cdn.simpleicons.org/firebase/FFCA28', size: 'small' },
        { name: 'AWS', url: 'https://cdn.simpleicons.org/amazonaws/FF9900', size: 'large' },
        { name: 'Azure', url: 'https://cdn.simpleicons.org/microsoftazure/0078D4', size: 'medium' },
        { name: 'Google Cloud', url: 'https://cdn.simpleicons.org/googlecloud/4285F4', size: 'medium' },

        // Databases
        { name: 'MongoDB', url: 'https://cdn.simpleicons.org/mongodb/47A248', size: 'small' },
        { name: 'PostgreSQL', url: 'https://cdn.simpleicons.org/postgresql/4169E1', size: 'small' },
        { name: 'MySQL', url: 'https://cdn.simpleicons.org/mysql/4479A1', size: 'small' },
        { name: 'Redis', url: 'https://cdn.simpleicons.org/redis/DC382D', size: 'small' },

        // Design Tools
        { name: 'Figma', url: 'https://cdn.simpleicons.org/figma/F24E1E', size: 'small' },
        { name: 'Adobe XD', url: 'https://cdn.simpleicons.org/adobexd/FF61F6', size: 'small' },

        // Tech Companies
        { name: 'Google', url: 'https://cdn.simpleicons.org/google/4285F4', size: 'large' },
        { name: 'Microsoft', url: 'https://cdn.simpleicons.org/microsoft/5E5E5E', size: 'large' },
        { name: 'NVIDIA', url: 'https://cdn.simpleicons.org/nvidia/76B900', size: 'medium' },
        { name: 'Apple', url: 'https://cdn.simpleicons.org/apple/FFFFFF', size: 'medium' },
        { name: 'Meta', url: 'https://cdn.simpleicons.org/meta/0668E1', size: 'small' },

        // AI Tools
        { name: 'ChatGPT', url: 'https://cdn.simpleicons.org/openai/412991', size: 'large' },
        { name: 'Google Gemini', url: 'https://cdn.simpleicons.org/googlegemini/8E75B2', size: 'large' },
        { name: 'Perplexity', url: 'https://cdn.simpleicons.org/perplexity/1FB8CD', size: 'medium' },
        { name: 'Anthropic', url: 'https://cdn.simpleicons.org/anthropic/191919', size: 'small' },

        // Linux Distributions
        { name: 'Arch Linux', url: 'https://cdn.simpleicons.org/archlinux/1793D1', size: 'large' },
        { name: 'Ubuntu', url: 'https://cdn.simpleicons.org/ubuntu/E95420', size: 'medium' },
        { name: 'Debian', url: 'https://cdn.simpleicons.org/debian/A81D33', size: 'small' },
        { name: 'Fedora', url: 'https://cdn.simpleicons.org/fedora/51A2DA', size: 'small' },
        { name: 'Linux', url: 'https://cdn.simpleicons.org/linux/FCC624', size: 'large' },
        { name: 'Kali Linux', url: 'https://cdn.simpleicons.org/kalilinux/557C94', size: 'medium' },

        // Open Source Tools
        { name: 'GitLab', url: 'https://cdn.simpleicons.org/gitlab/FC6D26', size: 'medium' },
        { name: 'Jenkins', url: 'https://cdn.simpleicons.org/jenkins/D24939', size: 'small' },
        { name: 'Nginx', url: 'https://cdn.simpleicons.org/nginx/009639', size: 'small' },
        { name: 'Grafana', url: 'https://cdn.simpleicons.org/grafana/F46800', size: 'small' },
        { name: 'Prometheus', url: 'https://cdn.simpleicons.org/prometheus/E6522C', size: 'small' },
    ];

    return (
        <div className="simple-background">
            {techLogos.map((logo, index) => (
                <img
                    key={index}
                    src={logo.url}
                    alt={logo.name}
                    className={`tech-logo ${logo.size}`}
                    title={logo.name}
                />
            ))}
        </div>
    );
};

export default SimpleBackground;
