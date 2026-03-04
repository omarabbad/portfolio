import { motion } from 'framer-motion';
import { ProductCard, type ProductCardColor } from '@/components/ui/Card';
import { Database, Brain, Server, Code2 } from 'lucide-react';

interface ProjectsProps {
    isDark: boolean;
}

const products: {
    color: ProductCardColor;
    title: string;
    description: string;
    icon: React.ReactNode;
}[] = [
    {
        color: 'blue',
        title: 'Hotel Management System',
        description: 'Comprehensive platform for managing operations, bookings, and customer data with a full GUI interface.',
        icon: <Database size={72} strokeWidth={1.5} color="white" />,
    },
    {
        color: 'green',
        title: 'Patient Management System',
        description: 'Healthcare administration platform with secure record keeping, scheduling, and patient data management.',
        icon: <Server size={72} strokeWidth={1.5} color="white" />,
    },
    {
        color: 'pink',
        title: 'Flight Delay Prediction',
        description: 'Machine learning model predicting flight delays with high accuracy based on historical flight data.',
        icon: <Brain size={72} strokeWidth={1.5} color="white" />,
    },
    {
        color: 'purple',
        title: 'Linux Network Administration',
        description: 'Configuration and hardening of Linux-based server networks with security best practices.',
        icon: <Code2 size={72} strokeWidth={1.5} color="white" />,
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants = {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } },
};

export function Projects({ isDark }: ProjectsProps) {
    const textPrimary   = isDark ? '#F5F5F5' : '#000000';
    const textSecondary = isDark ? '#B8B8B8' : '#555555';

    return (
        <section
            id="projects"
            className="w-full"
            style={{
                background: isDark ? '#000000' : '#FFFFFF',
                paddingTop: 120,
                paddingBottom: 120,
            }}
        >
            <div className="coda-container">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="flex flex-col gap-4 mb-12"
                >
                    <span
                        className="label-text"
                        style={{ color: textSecondary }}
                    >
                        Selected Work
                    </span>
                    <h2
                        className="display-heading"
                        style={{ color: textPrimary }}
                    >
                        Featured Projects
                    </h2>
                    <p
                        className="font-sans font-normal max-w-lg"
                        style={{ fontSize: 16, lineHeight: 1.6, color: textSecondary }}
                    >
                        A selection of intelligent systems, data platforms, and enterprise solutions
                        built with precision and purpose.
                    </p>
                </motion.div>

                {/* 4-column product card grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {products.map((product) => (
                        <motion.div key={product.title} variants={cardVariants}>
                            <ProductCard
                                color={product.color}
                                title={product.title}
                                description={product.description}
                                icon={product.icon}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
