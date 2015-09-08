package charViewer.charakter;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static charViewer.charakter.Attribute.*;

@Service
public class CharacterRepository {

    private final List<Character> characters;

    public CharacterRepository() {
        characters = new ArrayList<>();

        final Character heronimus = new Character();
        heronimus.name = "Heronimus";
        heronimus.classes.add(new CharacterClass("Paladin", 1));
        heronimus.classes.add(new CharacterClass("Warlock", 1));
        heronimus.attributes.put(STRENGTH, 12);
        heronimus.attributes.put(DEXTERITY, 16);
        heronimus.attributes.put(CONSTITUTION, 12);
        heronimus.attributes.put(INTELLIGENCE, 10);
        heronimus.attributes.put(WISDOM, 10);
        heronimus.attributes.put(CHARISMA, 16);

        characters.add(heronimus);

        final Character guruk = new Character();
        guruk.name = "Guruk";
        guruk.classes.add(new CharacterClass("Babarian", 2));
        guruk.attributes.put(STRENGTH, 15);
        guruk.attributes.put(DEXTERITY, 10);
        guruk.attributes.put(CONSTITUTION, 15);
        guruk.attributes.put(INTELLIGENCE, 10);
        guruk.attributes.put(WISDOM, 8);
        guruk.attributes.put(CHARISMA, 12);

        characters.add(guruk);
    }

    public List<Character> findAll() {
        return characters;
    }

    public Optional<Character> findById(String id) {
        return characters
                .stream()
                .filter(character -> character.id.equals(id))
                .findFirst();
    }
}
