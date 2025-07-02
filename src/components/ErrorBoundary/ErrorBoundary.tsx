// src/components/ErrorBoundary/ErrorBoundary.tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ExclamationTriangleIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import Button from '../UI/Button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo,
    });

    // Here you can log the error to an error reporting service
    // Example: logErrorToService(error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50 flex items-center justify-center p-4">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-8 text-center border border-neutral-100"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Error Icon */}
            <motion.div
              animate={{ scale: 1 }}
              className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
              initial={{ scale: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <ExclamationTriangleIcon className="w-10 h-10 text-red-600" />
            </motion.div>

            {/* Error Message */}
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-3xl font-bold text-neutral-900 mb-3">
                Oops! Something went wrong
              </h1>
              
              <p className="text-neutral-600 mb-8 leading-relaxed">
                We're sorry for the inconvenience. The page encountered an unexpected error, but don't worry - we're here to help you get back on track.
              </p>
            </motion.div>

            {/* Development Error Details */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <motion.details
                animate={{ opacity: 1 }}
                className="mb-8 text-left bg-neutral-50 rounded-xl p-4"
                initial={{ opacity: 0 }}
                transition={{ delay: 0.4 }}
              >
                <summary className="cursor-pointer text-sm font-medium text-neutral-700 mb-3 hover:text-primary-600 transition-colors">
                  🔍 Error Details (Development Only)
                </summary>
                <div className="bg-neutral-100 rounded-lg p-4 text-xs font-mono text-neutral-800 overflow-auto max-h-48">
                  <div className="mb-3">
                    <strong className="text-red-600">Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong className="text-red-600">Component Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-2 text-xs">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </motion.details>
            )}

            {/* Action Buttons */}
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                className="flex-1"
                leftIcon={<ArrowPathIcon className="w-5 h-5" />}
                variant="primary"
                onClick={this.handleReset}
              >
                Try Again
              </Button>
              
              <Button
                className="flex-1"
                variant="outline"
                onClick={this.handleGoHome}
              >
                Go Home
              </Button>
              
              <Button
                className="flex-1"
                variant="ghost"
                onClick={this.handleReload}
              >
                Reload Page
              </Button>
            </motion.div>

            {/* Support Message */}
            <motion.div
              animate={{ opacity: 1 }}
              className="mt-8 p-4 bg-primary-50 rounded-xl border border-primary-100"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm text-primary-700">
                <strong>Need help?</strong> If this problem persists, please contact our support team at{' '}
                <a 
                  className="font-medium underline hover:text-primary-800 transition-colors" 
                  href="mailto:support@homewardpartners.com"
                >
                  support@homewardpartners.com
                </a>
              </p>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-400 rounded-full opacity-60 animate-pulse" />
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary-400 rounded-full opacity-60 animate-bounce" />
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;