import { emojipedia } from './emoji'

const Emojis = () => {
  return (
    <>
      <h1>
        <span>Emoji Meanings</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(({ id, emoji, name, meaning }) => {
          return (
            <div className="term" key={id}>
              <dt>
                <span className="emoji" role="img" aria-label="Tense Biceps">
                  {emoji}
                </span>
                <span>{name}</span>
              </dt>
              <dd>{meaning}</dd>
            </div>
          )
        })}
      </dl>
    </>
  )
}
export default Emojis
