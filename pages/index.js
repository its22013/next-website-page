import Link from 'next/link'

export default function Nav () {
  return (
    <nav>
      <ul>
        <li>
          <Link legacyBehavior href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href='tv'>
            <a>Tv</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href='times'>
            <a>Times</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href='layout'>
            <a>Layout</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href='phone'>
            <a>Phone</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href='mart'>
            <a>Mart</a>
          </Link>
        </li>
      </ul>
    </nav>

  )
}
