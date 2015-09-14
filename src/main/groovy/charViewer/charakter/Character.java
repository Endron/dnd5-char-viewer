package charViewer.charakter;

import java.util.ArrayList;
import java.util.EnumMap;
import java.util.List;
import java.util.Map;

import static java.util.UUID.randomUUID;
import static java.util.stream.Collectors.summingInt;

public class Character {

    public final String id = randomUUID().toString();

    public String name;
    public String icon = "fa-user";

    public List<CharacterClass> classes = new ArrayList<>();

    public Map<Attribute, Integer> attributes = new EnumMap<>(Attribute.class);

    public List<String> skillProficiency = new ArrayList<>();

    public int getProficiencyBonus() {
        final int effectiveLevel = classes.stream()
                .collect(summingInt(it -> it.level));

        return 2 + (effectiveLevel - 1) / 4;
    }
}
