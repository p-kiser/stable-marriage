INPUT = bijection

$(INPUT).svg: $(INPUT).dot
	dot -Tsvg $(INPUT).dot -o $(INPUT).svg

.PHONY: clean

clean:
	rm -f $(INPUT).svg