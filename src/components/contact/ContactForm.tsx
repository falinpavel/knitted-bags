import styled from 'styled-components';
import { useForm } from '@/hooks/useForm';
import { useNotification } from '@/hooks/useNotification';
import { Button } from '@/components/common/Button';
import { motion } from 'framer-motion';

const Form = styled(motion.form)`
  max-width: 600px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.textLight}30;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.textLight}30;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ErrorText = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.875rem;
  margin-top: ${({ theme }) => theme.spacing.xs};
  display: block;
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ContactForm: React.FC = () => {
    const { showNotification } = useNotification();
    const { values, errors, handleChange, handleSubmit } = useForm({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
            consent: false
        },
        onSubmit: async (formValues) => {
            try {
                // API call would go here
                showNotification('Message sent successfully!', 'success');
            } catch (error) {
                showNotification('Failed to send message. Please try again.', 'error');
            }
        }
    });

    return (
        <Form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
        >
            <FormGroup>
                <Label htmlFor="name">Name *</Label>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    required
                />
                {errors.name && <ErrorText>{errors.name}</ErrorText>}
            </FormGroup>

            <FormGroup>
                <Label htmlFor="email">Email *</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    required
                />
                {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </FormGroup>

            <FormGroup>
                <Label htmlFor="phone">Phone</Label>
                <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange}
                />
                {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
            </FormGroup>

            <FormGroup>
                <Label htmlFor="message">Message *</Label>
                <TextArea
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    required
                />
                {errors.message && <ErrorText>{errors.message}</ErrorText>}
            </FormGroup>

            <CheckboxGroup>
                <Input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={values.consent}
                    onChange={handleChange}
                />
                <Label htmlFor="consent">
                    I agree to be contacted regarding my message
                </Label>
            </CheckboxGroup>

            <Button type="submit" fullWidth>
                Send Message
            </Button>
        </Form>
    );
};