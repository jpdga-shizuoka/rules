#
# Pandocを使って、マークダウンファイルからPDFを生成する
#
TITLE = OfficialRulesOfDiscGolf
VERSION = 2025
TARGET = $(TITLE)-$(VERSION).pdf

PANDOC = pandoc
CONFIGS = config
FILTERS = filters
LOCAL_SOURCES = sources
#
# Rules
#
RULES_SOUECES = \
	800.md \
	801.md \
	80101.md \
	80102.md \
	80103.md \
	802.md \
	80201.md \
	80202.md \
	80203.md \
	80204.md \
	80205.md \
	80206.md \
	80207.md \
	803.md \
	80301.md \
	80302.md \
	80303.md \
	804.md \
	80401.md \
	805.md \
	80501.md \
	80502.md \
	80503.md \
	806.md \
	80601.md \
	80602.md \
	80603.md \
	80604.md \
	80605.md \
	807.md \
	808.md \
	809.md \
	80901.md \
	80902.md \
	80903.md \
	810.md \
	811.md \
	812.md \
	813.md \
	81301.md \
	81302.md
RULES_FROM = ../rules
RULES_TO = ./.rules
RULES_ORIGINALS = $(addprefix $(RULES_FROM)/, $(RULES_SOUECES))
RULES_WORKS = $(addprefix $(RULES_TO)/, $(RULES_SOUECES))
RULES_LIST = $(RULES_WORKS)
RULES_UPDATED = .rules-updated
$(RULES_UPDATED): $(RULES_ORIGINALS)
	$(FILTERS)/delete-subsections $(RULES_FROM) $(RULES_TO) && \
	touch $(RULES_UPDATED)

#
# Appendix
#
APPENDIX_SOUECES = \
	appendix-a.md \
	appendix-b.md \
	appendix-c.md \
	appendix-d.md \
	appendix-e-print.md \
	appendix-f.md
APPENDIX_FROM = ../appendix
APPENDIX_TO = ./.appendix
APPENDIX_ORIGINALS = $(addprefix $(APPENDIX_FROM)/, $(APPENDIX_SOUECES))
APPENDIX_WORKS = $(addprefix $(APPENDIX_TO)/, $(APPENDIX_SOUECES))
APPENDIX_LIST = $(APPENDIX_WORKS)
APPENDIX_UPDATED = .appendix-updated

$(APPENDIX_UPDATED): $(APPENDIX_ORIGINALS)
	$(FILTERS)/delete-subsections $(APPENDIX_FROM) $(APPENDIX_TO) && \
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
	haz.md \
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
QAS_LIST = $(LOCAL_SOURCES)/qas.md $(QAS_WORKS)
QAS_UPDATED = .qas-updated

$(QAS_UPDATED): $(QAS_ORIGINALS)
	$(FILTERS)/remove-link $(QAS_FROM) $(QAS_TO) && \
	touch $(QAS_UPDATED)

#
# PDF
#
NEWPAGE = $(LOCAL_SOURCES)/newpage.md
TEMPLATEDIR = templates
TEMPLATE = $(TEMPLATEDIR)/default.tex
SOURCE = \
	$(LOCAL_SOURCES)/imagepath.md \
	$(NEWPAGE) \
	$(LOCAL_SOURCES)/preface.md \
	$(NEWPAGE) \
	$(LOCAL_SOURCES)/update.md \
	$(NEWPAGE) \
	$(RULES_LIST) \
	$(NEWPAGE) \
	$(APPENDIX_LIST) \
	$(NEWPAGE) \
	$(QAS_LIST)

$(TARGET): $(RULES_UPDATED) $(APPENDIX_UPDATED) $(QAS_UPDATED) $(SOURCE) $(CONFIGS)/*
	$(PANDOC) \
		-d $(CONFIGS)/filters.yaml \
		-d $(CONFIGS)/body.yaml \
		-o $(TARGET) \
		$(SOURCE)

clean:
	rm -f $(TARGET) $(RULES_UPDATED) $(APPENDIX_UPDATED) $(QAS_UPDATED) && \
	rm -fr $(RULES_TO) $(APPENDIX_TO) $(QAS_TO)

all: clean $(TARGET)
