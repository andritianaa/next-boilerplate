"use client";

import { withProps } from "@udecode/cn";
import {
  createPlugins,
  Plate,
  RenderAfterEditable,
  PlateLeaf,
} from "@udecode/plate-common";
import {
  createParagraphPlugin,
  ELEMENT_PARAGRAPH,
} from "@udecode/plate-paragraph";
import {
  createHeadingPlugin,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
} from "@udecode/plate-heading";
import {
  createBlockquotePlugin,
  ELEMENT_BLOCKQUOTE,
} from "@udecode/plate-block-quote";
import {
  createCodeBlockPlugin,
  ELEMENT_CODE_BLOCK,
  ELEMENT_CODE_LINE,
  ELEMENT_CODE_SYNTAX,
} from "@udecode/plate-code-block";
import {
  createHorizontalRulePlugin,
  ELEMENT_HR,
} from "@udecode/plate-horizontal-rule";
import { createLinkPlugin, ELEMENT_LINK } from "@udecode/plate-link";
import {
  createImagePlugin,
  ELEMENT_IMAGE,
  createMediaEmbedPlugin,
  ELEMENT_MEDIA_EMBED,
} from "@udecode/plate-media";
import {
  createExcalidrawPlugin,
  ELEMENT_EXCALIDRAW,
} from "@udecode/plate-excalidraw";
import { createTogglePlugin, ELEMENT_TOGGLE } from "@udecode/plate-toggle";
import {
  createColumnPlugin,
  ELEMENT_COLUMN_GROUP,
  ELEMENT_COLUMN,
} from "@udecode/plate-layout";
import { createCaptionPlugin } from "@udecode/plate-caption";
import {
  createMentionPlugin,
  ELEMENT_MENTION,
  ELEMENT_MENTION_INPUT,
} from "@udecode/plate-mention";
import {
  createTablePlugin,
  ELEMENT_TABLE,
  ELEMENT_TR,
  ELEMENT_TD,
  ELEMENT_TH,
} from "@udecode/plate-table";
import { createTodoListPlugin, ELEMENT_TODO_LI } from "@udecode/plate-list";
import {
  createBoldPlugin,
  MARK_BOLD,
  createItalicPlugin,
  MARK_ITALIC,
  createUnderlinePlugin,
  MARK_UNDERLINE,
  createStrikethroughPlugin,
  MARK_STRIKETHROUGH,
  createCodePlugin,
  MARK_CODE,
  createSubscriptPlugin,
  MARK_SUBSCRIPT,
  createSuperscriptPlugin,
  MARK_SUPERSCRIPT,
} from "@udecode/plate-basic-marks";
import {
  createFontColorPlugin,
  createFontBackgroundColorPlugin,
  createFontSizePlugin,
} from "@udecode/plate-font";
import {
  createHighlightPlugin,
  MARK_HIGHLIGHT,
} from "@udecode/plate-highlight";
import { createKbdPlugin, MARK_KBD } from "@udecode/plate-kbd";
import { createAlignPlugin } from "@udecode/plate-alignment";
import { createIndentPlugin } from "@udecode/plate-indent";
import { createIndentListPlugin } from "@udecode/plate-indent-list";
import { createLineHeightPlugin } from "@udecode/plate-line-height";
import { createAutoformatPlugin } from "@udecode/plate-autoformat";
import { createBlockSelectionPlugin } from "@udecode/plate-selection";
import { createDndPlugin } from "@udecode/plate-dnd";
import { createEmojiPlugin } from "@udecode/plate-emoji";
import {
  createExitBreakPlugin,
  createSoftBreakPlugin,
} from "@udecode/plate-break";
import { createNodeIdPlugin } from "@udecode/plate-node-id";
import { createResetNodePlugin } from "@udecode/plate-reset-node";
import { createDeletePlugin } from "@udecode/plate-select";
import { createTabbablePlugin } from "@udecode/plate-tabbable";
import { createTrailingBlockPlugin } from "@udecode/plate-trailing-block";
import {
  createCommentsPlugin,
  CommentsProvider,
  MARK_COMMENT,
} from "@udecode/plate-comments";
import { createDeserializeDocxPlugin } from "@udecode/plate-serializer-docx";
import { createDeserializeCsvPlugin } from "@udecode/plate-serializer-csv";
import { createDeserializeMdPlugin } from "@udecode/plate-serializer-md";
import { createJuicePlugin } from "@udecode/plate-juice";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { BlockquoteElement } from "@/components/plate-ui/blockquote-element";
import { CodeBlockElement } from "@/components/plate-ui/code-block-element";
import { CodeLineElement } from "@/components/plate-ui/code-line-element";
import { CodeSyntaxLeaf } from "@/components/plate-ui/code-syntax-leaf";
import { ExcalidrawElement } from "@/components/plate-ui/excalidraw-element";
import { HrElement } from "@/components/plate-ui/hr-element";
import { ImageElement } from "@/components/plate-ui/image-element";
import { LinkElement } from "@/components/plate-ui/link-element";
import { LinkFloatingToolbar } from "@/components/plate-ui/link-floating-toolbar";
import { ToggleElement } from "@/components/plate-ui/toggle-element";
import { ColumnGroupElement } from "@/components/plate-ui/column-group-element";
import { ColumnElement } from "@/components/plate-ui/column-element";
import { HeadingElement } from "@/components/plate-ui/heading-element";
import { MediaEmbedElement } from "@/components/plate-ui/media-embed-element";
import { MentionElement } from "@/components/plate-ui/mention-element";
import { MentionInputElement } from "@/components/plate-ui/mention-input-element";
import { ParagraphElement } from "@/components/plate-ui/paragraph-element";
import { TableElement } from "@/components/plate-ui/table-element";
import { TableRowElement } from "@/components/plate-ui/table-row-element";
import {
  TableCellElement,
  TableCellHeaderElement,
} from "@/components/plate-ui/table-cell-element";
import { TodoListElement } from "@/components/plate-ui/todo-list-element";
import { CodeLeaf } from "@/components/plate-ui/code-leaf";
import { CommentLeaf } from "@/components/plate-ui/comment-leaf";
import { CommentsPopover } from "@/components/plate-ui/comments-popover";
import { HighlightLeaf } from "@/components/plate-ui/highlight-leaf";
import { KbdLeaf } from "@/components/plate-ui/kbd-leaf";
import { Editor } from "@/components/plate-ui/editor";
import { FixedToolbar } from "@/components/plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "@/components/plate-ui/fixed-toolbar-buttons";
import { FloatingToolbar } from "@/components/plate-ui/floating-toolbar";
import { FloatingToolbarButtons } from "@/components/plate-ui/floating-toolbar-buttons";
import { withPlaceholders } from "@/components/plate-ui/placeholder";
import { withDraggables } from "@/components/plate-ui/with-draggables";
import { TooltipProvider } from "@/components/plate-ui/tooltip";
import { useState } from "react";

const plugins = createPlugins(
  [
    createParagraphPlugin(),
    createHeadingPlugin(),
    createBlockquotePlugin(),
    createCodeBlockPlugin(),
    createHorizontalRulePlugin(),
    createLinkPlugin({
      renderAfterEditable: LinkFloatingToolbar as RenderAfterEditable,
    }),
    createImagePlugin(),
    createExcalidrawPlugin(),
    createTogglePlugin(),
    createColumnPlugin(),
    createMediaEmbedPlugin(),
    createCaptionPlugin({
      options: {
        pluginKeys: [
          // ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED
        ],
      },
    }),
    createMentionPlugin(),
    createTablePlugin(),
    createTodoListPlugin(),
    createBoldPlugin(),
    createItalicPlugin(),
    createUnderlinePlugin(),
    createStrikethroughPlugin(),
    createCodePlugin(),
    createSubscriptPlugin(),
    createSuperscriptPlugin(),
    createFontColorPlugin(),
    createFontBackgroundColorPlugin(),
    createFontSizePlugin(),
    createHighlightPlugin(),
    createKbdPlugin(),
    createAlignPlugin({
      inject: {
        props: {
          validTypes: [ELEMENT_PARAGRAPH, ELEMENT_H1, ELEMENT_H2, ELEMENT_H3],
        },
      },
    }),
    createIndentPlugin({
      inject: {
        props: {
          validTypes: [
            ELEMENT_PARAGRAPH,
            ELEMENT_H1,
            ELEMENT_H2,
            ELEMENT_H3,
            ELEMENT_BLOCKQUOTE,
            ELEMENT_CODE_BLOCK,
          ],
        },
      },
    }),
    createIndentListPlugin({
      inject: {
        props: {
          validTypes: [
            ELEMENT_PARAGRAPH,
            ELEMENT_H1,
            ELEMENT_H2,
            ELEMENT_H3,
            ELEMENT_BLOCKQUOTE,
            ELEMENT_CODE_BLOCK,
          ],
        },
      },
    }),
    createLineHeightPlugin({
      inject: {
        props: {
          defaultNodeValue: 1.5,
          validNodeValues: [1, 1.2, 1.5, 2, 3],
          validTypes: [
            ELEMENT_PARAGRAPH,
            // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3
          ],
        },
      },
    }),
    createAutoformatPlugin({
      options: {
        rules: [
          // Usage: https://platejs.org/docs/autoformat
        ],
        enableUndoOnDelete: true,
      },
    }),
    createBlockSelectionPlugin({
      options: {
        sizes: {
          top: 0,
          bottom: 0,
        },
      },
    }),
    createDndPlugin({
      options: { enableScroller: true },
    }),
    createEmojiPlugin(),
    createExitBreakPlugin({
      options: {
        rules: [
          {
            hotkey: "mod+enter",
          },
          {
            hotkey: "mod+shift+enter",
            before: true,
          },
          {
            hotkey: "enter",
            query: {
              start: true,
              end: true,
              // allow: KEYS_HEADING,
            },
            relative: true,
            level: 1,
          },
        ],
      },
    }),
    createNodeIdPlugin(),
    createResetNodePlugin({
      options: {
        rules: [
          // Usage: https://platejs.org/docs/reset-node
        ],
      },
    }),
    createDeletePlugin(),
    createSoftBreakPlugin({
      options: {
        rules: [
          { hotkey: "shift+enter" },
          {
            hotkey: "enter",
            query: {
              allow: [ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD],
            },
          },
        ],
      },
    }),
    createTabbablePlugin(),
    createTrailingBlockPlugin({
      options: { type: ELEMENT_PARAGRAPH },
    }),
    createCommentsPlugin(),
    createDeserializeDocxPlugin(),
    createDeserializeCsvPlugin(),
    createDeserializeMdPlugin(),
    createJuicePlugin(),
  ],
  {
    components: withDraggables(
      withPlaceholders({
        [ELEMENT_BLOCKQUOTE]: BlockquoteElement,
        [ELEMENT_CODE_BLOCK]: CodeBlockElement,
        [ELEMENT_CODE_LINE]: CodeLineElement,
        [ELEMENT_CODE_SYNTAX]: CodeSyntaxLeaf,
        [ELEMENT_EXCALIDRAW]: ExcalidrawElement,
        [ELEMENT_HR]: HrElement,
        [ELEMENT_IMAGE]: ImageElement,
        [ELEMENT_LINK]: LinkElement,
        [ELEMENT_TOGGLE]: ToggleElement,
        [ELEMENT_COLUMN_GROUP]: ColumnGroupElement,
        [ELEMENT_COLUMN]: ColumnElement,
        [ELEMENT_H1]: withProps(HeadingElement, { variant: "h1" }),
        [ELEMENT_H2]: withProps(HeadingElement, { variant: "h2" }),
        [ELEMENT_H3]: withProps(HeadingElement, { variant: "h3" }),
        [ELEMENT_H4]: withProps(HeadingElement, { variant: "h4" }),
        [ELEMENT_H5]: withProps(HeadingElement, { variant: "h5" }),
        [ELEMENT_H6]: withProps(HeadingElement, { variant: "h6" }),
        [ELEMENT_MEDIA_EMBED]: MediaEmbedElement,
        [ELEMENT_MENTION]: MentionElement,
        [ELEMENT_MENTION_INPUT]: MentionInputElement,
        [ELEMENT_PARAGRAPH]: ParagraphElement,
        [ELEMENT_TABLE]: TableElement,
        [ELEMENT_TR]: TableRowElement,
        [ELEMENT_TD]: TableCellElement,
        [ELEMENT_TH]: TableCellHeaderElement,
        [ELEMENT_TODO_LI]: TodoListElement,
        [MARK_BOLD]: withProps(PlateLeaf, { as: "strong" }),
        [MARK_CODE]: CodeLeaf,
        [MARK_COMMENT]: CommentLeaf,
        [MARK_HIGHLIGHT]: HighlightLeaf,
        [MARK_ITALIC]: withProps(PlateLeaf, { as: "em" }),
        [MARK_KBD]: KbdLeaf,
        [MARK_STRIKETHROUGH]: withProps(PlateLeaf, { as: "s" }),
        [MARK_SUBSCRIPT]: withProps(PlateLeaf, { as: "sub" }),
        [MARK_SUPERSCRIPT]: withProps(PlateLeaf, { as: "sup" }),
        [MARK_UNDERLINE]: withProps(PlateLeaf, { as: "u" }),
      })
    ),
  }
);

const initialValue = `[{"type":"h1","align":"start","children":[{"text":"CONDITIONS D'UTILISATION"}],"id":"cto8t"},{"type":"p","align":"start","children":[{"text":"Dernière mise à jour : 26 juin 2024"}],"id":"mix55"},{"type":"h2","align":"start","children":[{"text":"Bienvenue"}],"id":"70baz"},{"type":"p","align":"start","children":[{"text":"Bienvenue sur EditBag (« Service » ou « Plateforme »). Ces conditions d'utilisation (« Conditions ») régissent votre accès et votre utilisation de notre service SaaS fourni par EditBag (« nous », « notre » ou « nos »). En accédant ou en utilisant notre service, vous acceptez d'être lié par ces Conditions. Si vous n'acceptez pas toutes les Conditions, vous ne devez pas utiliser notre service"}],"id":"ihaxw"},{"type":"h2","align":"start","children":[{"text":"1. Utilisation du Service"}],"id":"2r9dn"},{"type":"h3","align":"start","children":[{"text":"1.1 Admissibilité"}],"id":"3s39g"},{"type":"p","align":"start","children":[{"text":"Vous devez être âgé d'au moins 18 ans pour utiliser notre service. En utilisant notre service, vous confirmez que vous avez au moins 18 ans."}],"id":"v9fz2"},{"type":"h3","align":"start","children":[{"text":"1.2 Inscription"}],"id":"2hw2d"},{"type":"p","align":"start","children":[{"text":"Pour accéder à certaines fonctionnalités du service, vous devez créer un compte. Vous vous engagez à fournir des informations exactes, complètes et à jour lors de votre inscription. Vous êtes responsable de la confidentialité de votre mot de passe et de toutes les activités qui se produisent sous votre compte."}],"id":"zzp3z"},{"type":"h3","align":"start","children":[{"text":"1.3 Utilisation Acceptable"}],"id":"716j9"},{"type":"p","align":"start","children":[{"text":"Vous acceptez de ne pas utiliser le service de manière à violer les lois applicables, à porter atteinte aux droits de propriété intellectuelle, ou à nuire à d'autres utilisateurs. Toute utilisation frauduleuse, abusive ou autrement illégale du service est strictement interdite."}],"id":"86cb8"},{"type":"h2","align":"start","children":[{"text":"2. Abonnements et Paiements"}],"id":"q4bc8"},{"type":"h3","align":"start","children":[{"text":"2.1 Plans d'Abonnement"}],"id":"32lvs"},{"type":"p","align":"start","children":[{"text":"Nous offrons différents plans d'abonnement. Les détails des plans et les frais applicables sont disponibles sur notre site web. Les frais sont facturés à l'avance sur une base récurrente (mensuelle ou annuelle) selon le plan choisi."}],"id":"e8f2r"},{"type":"h3","align":"start","children":[{"text":"2.2 Paiements"}],"id":"u8j6g"},{"type":"p","align":"start","children":[{"text":"Tous les paiements doivent être effectués via notre processeur de paiement tiers. En fournissant vos informations de paiement, vous autorisez notre processeur de paiement à débiter les frais applicables de votre compte."}],"id":"9qzi1"},{"type":"h3","align":"start","children":[{"text":"2.3 Renouvellement et Annulation"}],"id":"jitlj"},{"type":"p","align":"start","children":[{"text":"Votre abonnement sera automatiquement renouvelé à la fin de chaque période d'abonnement, sauf si vous annulez votre abonnement avant la date de renouvellement. Les frais de renouvellement sont facturés au tarif alors en vigueur. Vous pouvez annuler votre abonnement à tout moment via les paramètres de votre compte."}],"id":"a7cag"},{"type":"h2","align":"start","children":[{"text":"3. Contenu et Droits de Propriété Intellectuelle"}],"id":"edz1n"},{"type":"h3","align":"start","children":[{"text":"3.1 Votre Contenu"}],"id":"us7c3"},{"type":"p","align":"start","children":[{"text":"Vous conservez tous les droits sur le contenu que vous téléchargez du service (« Votre Contenu »)."}],"id":"5iolq"},{"type":"h3","align":"start","children":[{"text":"3.2 Contenu de la Plateforme"}],"id":"7xmj2"},{"type":"p","align":"start","children":[{"text":"Tout le contenu disponible sur notre service, y compris mais sans s'y limiter, les textes, graphiques, logos, images, clips audio et vidéo, ainsi que leur sélection et arrangement, est la propriété de EditBag ou de ses concédants de licence et est protégé par les lois sur la propriété intellectuelle."}],"id":"9ne2g"},{"type":"h2","align":"start","children":[{"text":"4. Confidentialité"}],"id":"2cj89"},{"type":"p","align":"start","children":[{"text":"Nous respectons votre vie privée. Veuillez consulter notre Politique de Confidentialité pour plus d'informations sur la manière dont nous collectons, utilisons et divulguons vos informations personnelles."}],"id":"pgqx0"},{"type":"h2","align":"start","children":[{"text":"5. Limitations de Responsabilité"}],"id":"x0017"},{"type":"h3","align":"start","children":[{"text":"5.1 Exclusion de Garanties"}],"id":"3llp3"},{"type":"p","align":"start","children":[{"text":"Le service est fourni « tel quel » et « tel que disponible ». Nous déclinons toute garantie de quelque nature que ce soit, expresse ou implicite, y compris, mais sans s'y limiter, les garanties de qualité marchande, d'adéquation à un usage particulier, et de non-violation."}],"id":"x4k77"},{"type":"h3","align":"start","children":[{"text":"5.2 Limitation de Responsabilité"}],"id":"i4bz8"},{"type":"p","align":"start","children":[{"text":"En aucun cas, EditBag, ses filiales, ou leurs directeurs, employés ou agents, ne seront responsables des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, y compris, sans s'y limiter, la perte de profits, de données, d'utilisation, ou autres pertes intangibles, résultant de (i) votre accès à ou utilisation de, ou incapacité d'accéder ou d'utiliser le service ; (ii) tout comportement ou contenu de tiers sur le service ; ou (iii) tout contenu obtenu du service."}],"id":"47dg5"},{"type":"h2","align":"start","children":[{"text":"6. Modifications des Conditions"}],"id":"umgdq"},{"type":"p","align":"start","children":[{"text":"Nous nous réservons le droit de modifier ces Conditions à tout moment. Si nous apportons des modifications importantes, nous vous en informerons par email ou par un avis sur notre site web. Votre utilisation continue du service après de telles modifications constitue votre acceptation des nouvelles Conditions."}],"id":"57rk1"},{"type":"h2","align":"start","children":[{"text":"7. Résiliation"}],"id":"nfle6"},{"type":"p","align":"start","children":[{"text":"Nous pouvons résilier ou suspendre votre accès au service immédiatement, sans préavis ni responsabilité, pour toute raison, y compris, sans limitation, si vous violez ces Conditions. En cas de résiliation, votre droit d'utiliser le service cessera immédiatement."}],"id":"s3wqz"},{"type":"h2","align":"start","children":[{"text":"8. Dispositions Générales"}],"id":"6cf4q"},{"type":"h3","align":"start","children":[{"text":"8.1 Droit Applicable"}],"id":"5u3rg"},{"type":"p","align":"start","children":[{"text":"Ces Conditions sont régies et interprétées conformément aux lois de l'État du Sénégal."}],"id":"479xq"},{"type":"h3","align":"start","children":[{"text":"8.2 Résolution des Litiges"}],"id":"6hzff"},{"type":"p","align":"start","children":[{"text":"Tout litige découlant de ou lié à ces Conditions ou au service sera résolu par arbitrage exécutoire conformément aux règles d'arbitrage commercial."}],"id":"x9xef"},{"type":"h3","align":"start","children":[{"text":"8.3 Intégralité de l'Accord"}],"id":"y58a8"},{"type":"p","align":"start","children":[{"text":"Ces Conditions constituent l'intégralité de l'accord entre vous et EditBag concernant le service et remplacent tous les accords antérieurs ou contemporains."}],"id":"v0tuu"},{"type":"h3","align":"start","children":[{"text":"8.4 Divisibilité"}],"id":"rjvyu"},{"type":"p","align":"start","children":[{"text":"Si une disposition de ces Conditions est jugée invalide ou inapplicable, les autres dispositions resteront en vigueur."}],"id":"hkzcq"},{"type":"h3","align":"start","children":[{"text":"8.5 Renonciation"}],"id":"ziwuv"},{"type":"p","align":"start","children":[{"text":"Aucune renonciation à un terme de ces Conditions ne sera considérée comme une renonciation ultérieure ou continue à ce terme ou à tout autre terme, et le fait pour EditBag de ne pas faire valoir un droit ou une disposition en vertu de ces Conditions ne constitue pas une renonciation à ce droit ou à cette disposition."}],"id":"c4i6m"},{"type":"h2","align":"start","children":[{"text":"9. Politique de Remboursement"}],"id":"m4ozz"},{"type":"p","align":"start","children":[{"text":"Vous n'aurez droit à un remboursement de tous les frais qui nous ont été payés que si (1) vous annulez votre abonnement dans les 5 jours calendaires à compter de la date de son achat et/ou de son renouvellement (« Période de remboursement ») et (2) vous n'avez pas téléchargé de produits EditBag pendant cette période de remboursement. Vous comprenez et acceptez par la présente que vous n'aurez droit à aucun remboursement si : (i) vous ne demandez pas de remboursement à EditBag pendant la période de remboursement ; ou (ii) vous téléchargez des produits EditBag à partir du site Web pendant la période de remboursement."}],"id":"bny05"},{"type":"p","align":"start","children":[{"text":"Pour éviter toute ambiguïté, cette section 10 ne s'applique pas aux comptes gratuits, et par conséquent, si vous êtes abonné avec un compte gratuit, vous n'aurez droit à aucun remboursement."}],"id":"ia63x"},{"type":"h2","align":"start","children":[{"text":"Contact"}],"id":"pr0lx"},{"type":"p","align":"start","children":[{"text":"Pour toute question concernant ces Conditions, veuillez nous contacter à "},{"target":"_blank","type":"a","url":"mailto:editbagsaas@gmail.com","children":[{"text":"editbagsaas@gmail.com"}],"id":"byd73"},{"text":""}],"id":"rz19s"}]`;

type EditorContent = {
  id: string;
  type: string;
  children: {
    text: string;
    bold?: boolean;
    italic?: boolean;
  }[];
}[];

export function PlateEditor() {
  const [editorValue, setEditorValue] = useState<EditorContent>(
    JSON.parse(initialValue) as EditorContent
  );

  const handleChange = (newValue: EditorContent) => {
    const valueString = JSON.stringify(newValue);
    setEditorValue(newValue);
    console.log(valueString);
  };
  return (
    <TooltipProvider>
      <DndProvider backend={HTML5Backend}>
        <CommentsProvider users={{}} myUserId="1">
          <Plate
            plugins={plugins}
            value={editorValue}
            onChange={(newValue) => handleChange(newValue)}
          >
            <FixedToolbar>
              <FixedToolbarButtons />
            </FixedToolbar>

            <Editor className="focus-visible:ring-none h-[80vh] rounded-bl-lg rounded-br-lg ring-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0" />

            <FloatingToolbar>
              <FloatingToolbarButtons />
            </FloatingToolbar>
            <CommentsPopover />
          </Plate>
        </CommentsProvider>
      </DndProvider>
    </TooltipProvider>
  );
}
