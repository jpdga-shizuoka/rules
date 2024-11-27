NAME   = ディスクゴルフの公式規則
TARGET = $(NAME)

PANDOC = pandoc

CONFIGDIR = config
TEMPLATEDIR = templates
FILTERSDIR = filters
MARKDOWNDIR = sources

RULESDIR = ../rules
APPENDIXESDIR = ../appendix
QASDIR = ../qas

LOCAL_SOURCEDIR = sources

COVER_DATA = cover.tex
BACKCOVER_DATA = backcover.tex
TEMPLATE = $(TEMPLATEDIR)/main.tex
COVER_TEMPLATE = $(TEMPLATEDIR)/cover-template.tex
BACKCOVER_TEMPLATE = $(TEMPLATEDIR)/backcover-template.tex
NEWPAGE = $(MARKDOWNDIR)/newpage.md

RURLES = \
	$(RULESDIR)/800.md \
	$(MARKDOWNDIR)/801.md \
	$(RULESDIR)/80101.md \
	$(RULESDIR)/80102.md \
	$(RULESDIR)/80103.md \
	$(MARKDOWNDIR)/802.md \
	$(RULESDIR)/80201.md \
	$(RULESDIR)/80202.md \
	$(RULESDIR)/80203.md \
	$(RULESDIR)/80204.md \
	$(RULESDIR)/80205.md \
	$(RULESDIR)/80206.md \
	$(RULESDIR)/80207.md \
	$(MARKDOWNDIR)/803.md \
	$(RULESDIR)/80301.md \
	$(RULESDIR)/80302.md \
	$(RULESDIR)/80303.md \
	$(MARKDOWNDIR)/804.md \
	$(RULESDIR)/80401.md \
	$(MARKDOWNDIR)/805.md \
	$(RULESDIR)/80501.md \
	$(RULESDIR)/80502.md \
	$(RULESDIR)/80503.md \
	$(MARKDOWNDIR)/806.md \
	$(RULESDIR)/80601.md \
	$(RULESDIR)/80602.md \
	$(RULESDIR)/80603.md \
	$(RULESDIR)/80604.md \
	$(RULESDIR)/80605.md \
	$(RULESDIR)/807.md \
	$(RULESDIR)/808.md \
	$(MARKDOWNDIR)/809.md \
	$(RULESDIR)/80901.md \
	$(RULESDIR)/80902.md \
	$(RULESDIR)/80903.md \
	$(RULESDIR)/810.md \
	$(RULESDIR)/811.md \
	$(RULESDIR)/812.md \
	$(MARKDOWNDIR)/813.md \
	$(RULESDIR)/81301.md \
	$(RULESDIR)/81302.md

APPENDIXES = \
	$(APPENDIXESDIR)/appendix-a.md \
	$(APPENDIXESDIR)/appendix-b.md \
	$(APPENDIXESDIR)/appendix-c.md \
	$(APPENDIXESDIR)/appendix-d.md \
	$(APPENDIXESDIR)/appendix-e.md \
	$(APPENDIXESDIR)/appendix-f.md

QAS = $(MARKDOWNDIR)/qas.md \
	$(QASDIR)/app.md \
	$(QASDIR)/thr.md \
	$(QASDIR)/tee.md \
	$(QASDIR)/lie.md \
	$(QASDIR)/mar.md \
	$(QASDIR)/sta.md \
	$(QASDIR)/obs.md \
	$(QASDIR)/man.md \
	$(QASDIR)/pos.md \
	$(QASDIR)/2m.md \
	$(QASDIR)/los.md \
	$(QASDIR)/put.md \
	$(QASDIR)/ob.md \
	$(QASDIR)/cas.md \
	$(QASDIR)/com.md \
	$(QASDIR)/sco.md \
	$(QASDIR)/aba.md \
	$(QASDIR)/pro.md \
	$(QASDIR)/pra.md \
	$(QASDIR)/int.md \
	$(QASDIR)/mis.md \
	$(QASDIR)/cou.md \
	$(QASDIR)/equ.md \
	$(QASDIR)/mat.md \
	$(QASDIR)/dou.md \
	$(QASDIR)/cmp.md

SOURCE = $(MARKDOWNDIR)/imagepath.md
SOURCE += \
	$(NEWPAGE) \
	$(MARKDOWNDIR)/preface.md \
	$(NEWPAGE) \
	$(MARKDOWNDIR)/update.md \
	$(NEWPAGE) \
	$(RURLES) \
	$(NEWPAGE) \
	$(APPENDIXES) \
	$(NEWPAGE) \
	$(QAS)

$(TARGET).pdf: $(SOURCE)
	$(PANDOC) \
		-d $(CONFIGDIR)/body.yaml \
		-o $(TARGET).pdf \
		$(SOURCE)

all: clean $(TARGET).pdf

clean:
	rm -f $(TARGET).html $(TARGET).pdf $(COVER_DATA) $(BACKCOVER_DATA)
