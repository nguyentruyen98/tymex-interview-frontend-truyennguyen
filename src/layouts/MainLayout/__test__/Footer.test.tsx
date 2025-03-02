import { render, screen } from '@testing-library/react';

import Footer from '../Footer';

describe('Footer', () => {
  it('renders navigation links', () => {
    render(<Footer />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(screen.getByText('Our teams')).toBeInTheDocument();
    expect(screen.getByText('Whitepaper')).toBeInTheDocument();
    expect(screen.getByText('Marketplace')).toBeInTheDocument();
    expect(screen.getByText('Roadmap')).toBeInTheDocument();
    expect(screen.getByText('FAQs')).toBeInTheDocument();
    expect(screen.getByText('News')).toBeInTheDocument();
    expect(screen.getByText('Community')).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<Footer />);
    expect(screen.getByText('Contact us')).toBeInTheDocument();
    expect(screen.getByText('01234568910')).toBeInTheDocument();
    expect(screen.getByText('tymex-talent@tyme.com')).toBeInTheDocument();
  });

  it('renders subscription section', () => {
    render(<Footer />);
    expect(screen.getByText('Subscribe to receive our latest update')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your email address')).toBeInTheDocument();
    expect(screen.getByText('Subscribe')).toBeInTheDocument();
  });

  it('renders footer bottom section', () => {
    render(<Footer />);
    expect(screen.getByText('©2023 Tyme - Edit. All Rights reserved.')).toBeInTheDocument();
    expect(screen.getByText('Security')).toBeInTheDocument();
    expect(screen.getByText('Legal')).toBeInTheDocument();
    expect(screen.getByText('Privacy')).toBeInTheDocument();
  });
});