interface CardProps {
    className?: string;
    children: React.ReactNode;
}
const Card: React.FC<CardProps> = ({className, children}) =>{
    return (
        <div
          className={`relative rounded-lg border border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-900 transition-all duration-300 ${className}`}
        >
          {children}
        </div>
    );
}
export default Card;