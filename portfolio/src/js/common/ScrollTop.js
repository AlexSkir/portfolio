import React from 'react';
import ScrollUp from '../../assets/svg/ScrollUp.svg';

export default function ScrollTop() {
  const [visible, setVisible] = React.useState(false);
  const [scrollDir, setScrollDir] = React.useState('down');

  React.useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const { scrollY } = window;
      if (scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  return (
    <div
      className="scroll-to-top-btn"
      style={{
        display: visible && scrollDir === 'up' ? 'flex' : 'none',
      }}
    >
      <button
        className="scroll-to-top__button"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
        type="button"
      >
        <ScrollUp className="MySvg-icon" />
      </button>
    </div>
  );
}
