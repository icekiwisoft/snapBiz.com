import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon, HomeIcon } from './IconComponents';

interface BreadcrumbItem {
  label: string;
  path?: string;
  icon?: React.ReactNode;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
  items = [], 
  className = '' 
}) => {
  const location = useLocation();

  // Auto-generate breadcrumbs if none provided
  const autoItems: BreadcrumbItem[] = items.length > 0 ? items : (() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Accueil', path: '/', icon: (
        <HomeIcon className="w-4 h-4" />
      )}
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      // Convert segment to readable label
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      breadcrumbs.push({
        label,
        path: isLast ? undefined : currentPath,
        icon: isLast ? undefined : undefined
      });
    });

    return breadcrumbs;
  })();

  return (
    <nav className={`flex items-center space-x-2 text-sm ${className}`} aria-label="Breadcrumb">
      {autoItems.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          {index > 0 && (
            <ChevronRightIcon className="w-4 h-4 text-gray-500" />
          )}
          
          {item.path ? (
            <Link
              to={item.path}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 group"
            >
              {item.icon && (
                <span className="group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </span>
              )}
              <span>{item.label}</span>
            </Link>
          ) : (
            <span className="flex items-center space-x-2 text-white font-medium">
              {item.icon && item.icon}
              <span>{item.label}</span>
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
