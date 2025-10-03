import Hero from '../Hero';

export default function HeroExample() {
  return (
    <Hero onBrowse={(category) => console.log('Browse:', category)} />
  );
}
