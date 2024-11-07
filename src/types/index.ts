// Basic types used across the application
export interface User {
    id: string;
    email: string;
    subscriptionStatus: 'active' | 'inactive';
  }
  
  export interface DomainAnalysis {
    domain: string;
    keywords: string[];
    analyzedAt: Date;
  }