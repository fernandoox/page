import { FC } from 'react'
import Link from 'next/link'
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, Button, useTheme } from '@nextui-org/react'
import { Discovery } from 'react-iconly'
const Navigation: FC = () => {
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()

  return (
    <>
      <Link href="/">Fernandoox</Link>
      <Link href="/fun-facts">Fun Facts</Link>
      The current theme is: {type}
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
      <Button
        auto
        color="error"
        icon={<Discovery filled />}
        onClick={() => setTheme('system')}
      >
        System
      </Button>
    </>
  )
}

export default Navigation
