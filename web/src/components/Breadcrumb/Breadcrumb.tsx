import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css';

/**
 * Represents previous breadcrumb items (i.e. not the currnet page).
 */
export interface BreadcrumbItem {
    // Label to display
    label: string;
    // path (uri) to the page
    path: string;
}

/**
 * Props for the Breadcrumb component
 */
interface BreadcrumbProps {
    // Label for the current page (will not be clickable)
    currentPageLabel: string;
    // Additional breadcrump items between the root ("/") and current page.
    additionalBreadcrumbItems?: BreadcrumbItem[];
}

/**
 * Breadcrumb navigation component
 * Automatically includes "Recipes" as the root, components only specify their current page and any in-between items.
 */
const Breadcrumb: React.FC<BreadcrumbProps> = ({ currentPageLabel, additionalBreadcrumbItems = [] }) => {
    // Always start with Recipes home link
    const allItems: BreadcrumbItem[] = [
        { label: 'Recipes', path: '/' },
        ...additionalBreadcrumbItems,
    ];

    return (
        <nav className="breadcrumb">
            {allItems.map((item, index) => (
                <React.Fragment key={index}>
                    <Link to={item.path}>{item.label.toUpperCase()}</Link>
                    <span className="breadcrumb-separator">›</span>
                </React.Fragment>
            ))}
            <span>{currentPageLabel.toUpperCase()}</span>
        </nav>
    );
};

export default Breadcrumb;