package charViewer.charakter

import org.springframework.stereotype.Service

@Service
public class CharacterRepository {

    private final List<Character> characters

    public CharacterRepository() {
        characters = []

        final Character heronimus = new Character(
                name: 'Heronimus',
                classes: [
                        new CharacterClass(name: 'Paladin', level: 1),
                        new CharacterClass(name: 'Worlock', level: 1)
                ],
                attributes: [
                        STRENGTH: 12,
                        DEXTERITY: 16,
                        CONSTITUTION: 12,
                        INTELLIGENCE: 10,
                        WISDOM: 10,
                        CHARISMA: 16
                ]
        )
        characters.add(heronimus)

        final Character guruk = new Character(
                name: 'Guruk',
                classes: [
                        new CharacterClass(name: 'Babarian', level: 2)
                ],
                attributes: [
                        STRENGTH: 15,
                        DEXTERITY: 10,
                        CONSTITUTION: 15,
                        INTELLIGENCE: 10,
                        WISDOM: 8,
                        CHARISMA: 12
                ],
                skillProficiency: [
                        'Acrobatics'
                ]
        )
        characters.add(guruk)
    }

    public List<Character> findAll() {
        return characters
    }

    public Optional<Character> findById(String id) {
        return characters
                .stream()
                .filter { it.id == id }
                .findFirst()
    }
}
