import { useContactWidget } from '@/context/ContactWidgetContext';

export const useProtectedContact = () => {
  const { hasSubmittedContactForm, setIsContactWidgetOpen, setPendingAction } = useContactWidget();

  const handleProtectedAction = (action: 'Phone' | 'Email' | 'WhatsApp') => {
    if (hasSubmittedContactForm) {
      // User has already submitted the form, allow direct access
      if (action === 'Phone') {
        window.location.href = 'tel:+919833950755';
      } else if (action === 'Email') {
        window.location.href = 'mailto:robustindia@outlook.com';
      } else if (action === 'WhatsApp') {
        window.location.href = 'https://wa.me/919833950755';
      }
    } else {
      // User hasn't submitted the form, show contact widget first
      setPendingAction(action);
      setIsContactWidgetOpen(true);
    }
  };

  return { handleProtectedAction };
}; 