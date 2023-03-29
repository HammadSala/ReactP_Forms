import React from "react";

class ErrorBoundary extends React.Component {
    componentDidCatch(error : any, info: any) {
      console.error('Error caught by boundary:', error, info);
    }
  
    render() {
      return ("Error")
    }
  }

  export default ErrorBoundary;
  