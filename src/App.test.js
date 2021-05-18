import { render, screen } from '@testing-library/react';
import App from './App';

test('includes the four required links', () => {
  render(<App />);

  // Testing that the four links required are there. (Also requires the link text to be what we define here,
  // which is not the intention, but these links will be removed and replaced by actual content later.)
  expect(screen.getByText("BIP wiki").href).toBe("https://statistics-norway.atlassian.net/wiki/spaces/BIP/overview");
  expect(screen.getByText("SSB developer guide").href).toBe("https://github.com/statisticsnorway/ssb-developer-guide");
  expect(screen.getByText("SSB platform-dev").href).toBe("https://github.com/statisticsnorway/platform-dev");
  expect(screen.getByText("STRATUS jira site").href).toBe("https://statistics-norway.atlassian.net/browse/STRATUS");
});
