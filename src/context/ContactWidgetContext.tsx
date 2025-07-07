"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ContactWidgetContextType {
  hasSubmittedContactForm: boolean;
  setHasSubmittedContactForm: (value: boolean) => void;
  isContactWidgetOpen: boolean;
  setIsContactWidgetOpen: (value: boolean) => void;
  pendingAction: string | null;
  setPendingAction: (action: string | null) => void;
}

const ContactWidgetContext = createContext<ContactWidgetContextType | undefined>(undefined);

export const ContactWidgetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [hasSubmittedContactForm, setHasSubmittedContactForm] = useState(false);
  const [isContactWidgetOpen, setIsContactWidgetOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<string | null>(null);

  return (
    <ContactWidgetContext.Provider
      value={{
        hasSubmittedContactForm,
        setHasSubmittedContactForm,
        isContactWidgetOpen,
        setIsContactWidgetOpen,
        pendingAction,
        setPendingAction,
      }}
    >
      {children}
    </ContactWidgetContext.Provider>
  );
};

export const useContactWidget = () => {
  const context = useContext(ContactWidgetContext);
  if (context === undefined) {
    throw new Error('useContactWidget must be used within a ContactWidgetProvider');
  }
  return context;
}; 