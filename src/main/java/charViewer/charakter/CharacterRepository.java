package charViewer.charakter;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static charViewer.charakter.Attribute.*;

@Service
public class CharacterRepository {

    private final List<Character> characters;

    public CharacterRepository() {
        characters = new ArrayList<>();

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
}
