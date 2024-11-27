NAME   = ディスクゴルフの公式規則
TARGET = $(NAME)

PANDOC = pandoc

CONFIGDIR = config
TEMPLATEDIR = templates
FILTERSDIR = filters
MARKDOWNDIR = sources

RULESDIR = ../rules
APPENDIXESDIR = ../appendix
QASDIR = ./qas

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

#
# Appendix
#
APPENDIX_SOUECES = \
	appendix-a.md \
	appendix-b.md \
	appendix-c.md \
	appendix-d.md \
	appendix-e.md \
	appendix-f.md
APPENDIX_FROM = ../appendix
APPENDIX_TO = ./.appendix
APPENDIX_ORIGINALS = $(addprefix $(APPENDIX_FROM)/, $(APPENDIX_SOUECES))
APPENDIX_WORKS = $(addprefix $(APPENDIX_TO)/, $(APPENDIX_SOUECES))
APPENDIX_LIST = $(APPENDIX_WORKS)
APPENDIX_UPDATED = .appendix-updated
$(APPENDIX_UPDATED): $(APPENDIX_ORIGINALS)
	filters/delete-subsections $(APPENDIX_FROM) $(APPENDIX_TO) && \
	touch $(APPENDIX_UPDATED)

#
# Q&A
#
QAS_SOUECES = \
	app.md \
	thr.md \
	tee.md \
	lie.md \
	mar.md \
	sta.md \
	obs.md \
	man.md \
	pos.md \
	2m.md \
	los.md \
	put.md \
	ob.md \
	cas.md \
	com.md \
	sco.md \
	aba.md \
	pro.md \
	pra.md \
	int.md \
	mis.md \
	cou.md \
	equ.md \
	mat.md \
	dou.md \
	cmp.md
QAS_FROM = ../qas
QAS_TO = ./.qas
QAS_ORIGINALS = $(addprefix $(QAS_FROM)/, $(QAS_SOUECES))
QAS_WORKS = $(addprefix $(QAS_TO)/, $(QAS_SOUECES))
QAS_LIST = $(MARKDOWNDIR)/qas.md $(QAS_WORKS)
QAS_UPDATED = .qas-updated
$(QAS_UPDATED): $(QAS_ORIGINALS)
	filters/remove-link $(QAS_FROM) $(QAS_TO) && \
	touch $(QAS_UPDATED)

#
# PDF
#
SOURCE = \
	$(MARKDOWNDIR)/imagepath.md \
	$(NEWPAGE) \
	$(MARKDOWNDIR)/preface.md \
	$(NEWPAGE) \
	$(MARKDOWNDIR)/update.md \
	$(NEWPAGE) \
	$(RURLES) \
	$(NEWPAGE) \
	$(APPENDIX_LIST) \
	$(NEWPAGE) \
	$(QAS_LIST)

$(TARGET).pdf: $(APPENDIX_UPDATED) $(QAS_UPDATED) $(SOURCE)
	$(PANDOC) \
		-d $(CONFIGDIR)/body.yaml \
		-o $(TARGET).pdf \
		$(SOURCE)

#
#
#
clean:
	rm -f $(TARGET).pdf \
	$(APPENDIX_UPDATED) $(APPENDIX_TO)/* \
	$(QAS_UPDATED) $(QAS_TO)/*

all: clean $(TARGET).pdf
